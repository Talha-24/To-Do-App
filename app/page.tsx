import TaskManager from "@/src/components/tast-manager";
import PageContent from "./pageContent";

export default function Home() {


  return (
    <div className="flex h-screen items-center justify-center bg-white font-sans dark:bg-black relative">
      {/* <PageContent /> */}
      {/* <h1>Login</h1> */}
      <TaskManager/>
    </div>
  );
}
