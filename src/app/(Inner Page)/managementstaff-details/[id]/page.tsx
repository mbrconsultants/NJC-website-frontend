import ManagementStaffDetail from "@/webComponents/managementstaff/ManagementStaffDetail";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";

const ManagementStaffDetailPage = ({ params }: { params: { id: number } }) => {
    const id = params.id
  return  (   
    <main className="rv-14-home">
        <InnerLayout>
            <BreadcrumbSection title="Management Staff" currentPage="Management Staff" />
            <ManagementStaffDetail id={id} />;
        </InnerLayout>
    </main>
    )
};

export default ManagementStaffDetailPage;
