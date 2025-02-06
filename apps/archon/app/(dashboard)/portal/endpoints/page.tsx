import { getEndpoints } from "@/app/actions/endpoints/get-endpoints-action";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/groups/endpoints/columns";
import { Breadcrumbs } from "@/components/parts/breadcrumbs";
import { Header } from "@/components/parts/header";
import { PageWrapper } from "@/components/parts/page-wrapper";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const pageData = {
  name: "Endpoints",
  title: "Endpoints",
  description: "All your existing endpoints",
};

export default async function Page() {
  // fetch endpoints
  const endpoints = await getEndpoints();
  const { data: endpointsData, serverError } = endpoints || {};

  // check for errors
  if (!endpointsData || serverError) notFound();

  return (
    <>
      <Breadcrumbs pageName={pageData?.name} />
      <PageWrapper>
        <Header title={pageData?.title}>{pageData?.description}</Header>
        <DataTable columns={columns} data={endpointsData} createObject={true} />
      </PageWrapper>
    </>
  );
}
