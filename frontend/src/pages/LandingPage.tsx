"use client";

import { FC, useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PageContainer from "../components/page-container/page-container";
import HomeText from "../home-paralax/homeText";
import Error from "../ui/error-component/error";

const LandingPage: FC = () => {
  const [activePage, setActivePage] = useState<number>(1);

  const onChangeActivePage = useCallback(
    (inView: boolean, entry: IntersectionObserverEntry, id: number) => {
      if (id && inView) setActivePage(+id);
    },
    []
  );

  return (
    <div>
      <PageContainer
        onChangeActivePage={onChangeActivePage}
        id="1"
        container={false}
      >
        <ErrorBoundary fallback={<Error />}>
          <HomeText />
        </ErrorBoundary>
      </PageContainer>

      <PageContainer onChangeActivePage={onChangeActivePage} id="2">
        <ErrorBoundary fallback={<Error />}></ErrorBoundary>
      </PageContainer>
    </div>
  );
};

export default LandingPage;
