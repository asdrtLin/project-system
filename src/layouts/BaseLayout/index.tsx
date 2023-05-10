import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';

function BaseLayout() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
}

export default BaseLayout;
