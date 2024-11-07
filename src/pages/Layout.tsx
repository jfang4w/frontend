import Sidebar from "./Sidebar";

export interface LayoutProps  { 
   children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
}
