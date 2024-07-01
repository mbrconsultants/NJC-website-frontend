import CurrentCouncilMemberDetail from "@/webComponents/currentcouncilmembers/CurrentCouncilMemberDetail";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";

const CurrentCouncilMemberDetailPage = ({ params }: { params: { id: number } }) => {
    const id = params.id
  return ( 
  <main className="rv-14-home">
        <InnerLayout>
            <BreadcrumbSection title="Current Council Member" currentPage="Current Council Member" />
            <CurrentCouncilMemberDetail id={id} />;
        </InnerLayout>
    </main>
  )
};

export default CurrentCouncilMemberDetailPage;
