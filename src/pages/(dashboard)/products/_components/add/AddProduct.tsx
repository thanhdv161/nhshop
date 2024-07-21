import instance from '@/configs/axios';
import { BackwardFilled, Loading3QuartersOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Checkbox, Col, Form, FormProps, GetProp, Input, InputNumber, message, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Link } from 'react-router-dom';

type FieldType = {
  name: string;
  category: string[];
  price: number;
  image?: string;
  gallery?: string[];
  description?: string;
  discount?: number;
  countInStock?: number;
  featured?: boolean;
  tags?: string[];
  attributes?: string[];
};

const AddProduct = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => instance.get(`/categories`),
  });

  const {mutate, isPending} = useMutation({
    mutationFn: async (product: FieldType) => {
      try {
        return await instance.post(`/products`, product)
      } catch (error) {
        throw new Error(`Thêm sản phẩm thất bại`);
      }
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Thêm sản phẩm thành công"
      });
      form.resetFields();
    },
    onError: (error) => {
      messageApi.open({
        type: "error",
        content: error.message
      })
    }
  })
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    mutate(values);
  };
  return (
    <div>
      {contextHolder}
        <div className='flex item-center justify-between'>
            <h1 className='text-2xl font-semibold'>Thêm sản phẩm</h1>
            <Button type='primary'>
                <Link to={`/admin/products`}>
                    <BackwardFilled className='mr-1'/>Quay lại
                </Link>
            </Button>
        </div>
        <div className='max-w-7xl mx-auto grid grid-cols-[800px,auto] gap-8'>
        <Form 
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800 }}
          onFinish={onFinish}
        >
        <Form.Item<FieldType>
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: 'Tên sản phẩm bắt buộc phải nhập!' }]}
        >
          <Input disabled={isPending}/>
        </Form.Item>  
        <Form.Item 
        name="category"
        label="Danh mục sản phẩm"
        rules={[{ required: true, message: 'Danh mục sản phẩm bắt buộc phải chọn!' }]}>
        <Checkbox.Group>
          <Row>
            <Col>
              {categories?.data?.map((category: { _id: number | string; name: string }) => (
                <Checkbox key={category._id} value={category._id}>
                  {category.name}
                </Checkbox>
              ))}
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
        <Form.Item<FieldType>
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: 'Giá sản phẩm bắt buộc phải nhập!' }]}
        >
          <InputNumber disabled={isPending}/>
        </Form.Item>
        <Form.Item<FieldType>
          label="Ảnh"
          name="image"
        >
          <Input disabled={isPending}/>
        </Form.Item>    
        <Form.Item<FieldType>
          label="Gallery ảnh"
          name="gallery"
        >
          <Input disabled={isPending}/>
        </Form.Item>    
        <Form.Item<FieldType>
          label="Mô tả sản phẩm"
          name="description"
        >
          <TextArea rows={4} disabled={isPending}/>
        </Form.Item>  
        <Form.Item<FieldType>
                        label="Giá khuyến mại"
                        name="discount"
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || value < getFieldValue("price")) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("Giá khuyến mãi phải nhỏ hơn giá sản phẩm!")
                                    );
                                },
                            }),
                        ]}
                    >
            <InputNumber />
        </Form.Item>
        <Form.Item<FieldType> label="Số lượng sản phẩm" name="countInStock">
              <InputNumber />
        </Form.Item>
        <Form.Item<FieldType>
            label="Sản phẩm nổi bật"
            name="featured"
            valuePropName="checked"
        >
            <Checkbox />
        </Form.Item>
        <Form.Item<FieldType> label="Tags" name="tags">
            <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Thuộc tính" name="attributes">
            <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {isPending ? <><Loading3QuartersOutlined className='mr-2 animate-spin'/>Thêm</> : "Thêm"}
          </Button>
        </Form.Item>
        </Form>  
        <div>
          aside
        </div> 
        </div>
    </div>
  )
}

export default AddProduct