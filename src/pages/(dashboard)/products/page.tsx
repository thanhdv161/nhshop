import { IProduct } from '@/common/types/product'
import instance from '@/configs/axios'
import { PlusOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, message, Popconfirm, Skeleton, Table } from 'antd'
import { Link } from 'react-router-dom'

type Props = {}

const ProductsManagementPage = (props: Props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                return await instance.get(`/products`);
            } catch (error) {
                throw new Error((error as any).message)
            }
        }
    })
    
    const {mutate} = useMutation({
        mutationFn: async (id: number | string) => {
            try {
                return await instance.delete(`/products/${id}`)
            } catch (error) {
                throw new Error((error as any).message)
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: 'success',
                content: "Xóa sản phẩm thành công"
            })
            queryClient.invalidateQueries({
                queryKey: ['products']
            })
        },
        onError: (error) => {
            messageApi.open({
                type: 'error',
                content: error.message,
              });
        }
    })
    const createFilters = (products: IProduct[]) => {
        return products
            .map((product: IProduct) => product.name)
            .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index)
            .map((name: string) => ({ text: name, value: name }));
    };
    const dataSource = data?.data?.data.map((product: IProduct) => ({
        key: product._id,
        ...product
    }))
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: 'name',
            key: "name",
            filterSearch: true,
            filters: data ? createFilters(data?.data?.data) : [],
            onFilter: (value: string, product: IProduct) => product.name.includes(value),
            sorter: (a: IProduct, b: IProduct) => a.name.localeCompare(b.name),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Giá sản phẩm",
            dataIndex: 'price',
            key: "price",
            sorter: (a: IProduct, b: IProduct) => a.price - b.price,
            render: (price: number) =>
                new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                    price
                ),

        },
        {
            title: "Ảnh",
            dataIndex: 'image',
            key: "image",
            render: (image: string, record: any) => {
                console.log(image[0]);
                
                return (
                    <img
                    src={image[0]}
                    alt={record.name}
                    style={{ width: 100, height: 100, objectFit: 'cover' }} 
                  />
                )
            }
        },
        {
            title: "Mô tả",
            dataIndex: 'description',
            key: "description",
        },
        {
            title: "Giảm giá",
            dataIndex: 'discount',
            key: "discount",
        },
        {
            title: "Số lượng sản phẩm",
            dataIndex: 'countInStock',
            key: "countInStock",
        },
        {
            title: "Sản phẩm nổi bật",
            dataIndex: 'featured',
            key: "featured",
            render: (featured: string) => (featured ? 'Có' : 'Không'),
        },
        {
            title: "Tags",
            dataIndex: 'tags',
            key: "tags"
        },
        {
            key: "action",
            render: (_: any, product: IProduct) => {
                return <div className='space-x-2'>
                    <Link to={`/admin/products/${product._id}/edit`}><Button type='primary'>Cập nhật</Button></Link>
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn muốn xóa không?"
                        onConfirm={() => mutate(product._id!)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type='primary' danger>Xóa</Button>
                    </Popconfirm> 
                </div>
            }
        }

    ]
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>
  return (
    <div>
        {contextHolder}
        <div className='flex item-center justify-between mb-4'>
            <h1 className='text-2xl font-semibold'>Quản lý sản phẩm</h1>
            <Button type='primary'>
                <Link to={`/admin/products/add`}>
                    <PlusOutlined className='mr-1'/>Thêm sản phẩm
                </Link>
            </Button>
        </div>
        <div className='max-w-7xl mx-auto'>
            <Skeleton loading={isLoading} active>
                <Table dataSource={dataSource} columns={columns} />
            </Skeleton>
        </div>
    </div>
  )
}

export default ProductsManagementPage