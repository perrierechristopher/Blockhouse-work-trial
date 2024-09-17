"use client"
import React, { useState } from 'react';
import {
  PieChartOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { MenuItem } from './types';
import { getItem } from './functions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const items: MenuItem[] = [
  getItem('Charts', '/charts', <PieChartOutlined />, [
    getItem('Line', '/dashboard/charts/?type=line'),
    getItem('Bar', '/dashboard/charts/?type=bar'),
    getItem('Pie', '/dashboard/charts/?type=pie'),
    // getItem('Candlestick', '/dashboard/charts/?type=candlesticks'),


  ]),
];

const DashboardLayout = ({children}: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const pathName = usePathname();
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={({key})=>router.push(key)} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          {pathName.split("/").map((segment, index) => 
            <Breadcrumb.Item key={segment+index} className='capitalize'>{segment}</Breadcrumb.Item>
          )}
            
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          > 
          {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;