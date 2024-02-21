import Sidebar from "../components/adminUI/Sidebar";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function LayoutWrapper({ component: Component, layout: Layout }:any) {
    return  (
      <Layout>
        <Sidebar children={<Component/>} />
      </Layout>
    )
    }