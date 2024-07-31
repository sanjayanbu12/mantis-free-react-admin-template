import { LoginOutlined } from '@ant-design/icons';
const icons = {
  LoginOutlined,
};

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'Employees',
      title: 'Employees',
      type: 'item',
      url: '/allemployee',
      icon: icons.LoginOutlined,
    },
  ]
};

export default pages;
