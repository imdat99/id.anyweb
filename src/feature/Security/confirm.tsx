import { Popconfirm, Button, Toast } from '@lethdat/semi-ui-vue';

export default () => {
    const onConfirm = () => {
        Toast.success('确认保存！');
    };

    const onCancel = () => {
        Toast.warning('取消保存！');
    };
    return (
        <Popconfirm
            title="Bạn có chắc chắn muốn huỷ thay đổi không?"
            content="Hành động này không thể hoàn tác"
            onConfirm={onConfirm}
            onCancel={onCancel}
            position="topRight"
        >
            Thay đôi mật khẩu
        </Popconfirm>
    );
};