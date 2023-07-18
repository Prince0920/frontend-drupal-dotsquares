import React from "react";
import CaseStudy, { loadData as CaseStudyData, getMetaData as CaseStudyMeta } from "../pages/caseStudy/CaseStudy";
import Medipro, { loadData as MediproData, getMetaData as MediproMeta } from "../pages/caseStudy/subpages/Medipro";
import Nhtsa, { loadData as NhtsaData, getMetaData as NhtsaMeta } from "../pages/caseStudy/subpages/Nhtsa";
import PjeAuto, { loadData as PjeAutoData, getMetaData as PjeAutoMeta } from "../pages/caseStudy/subpages/PjeAuto";
import Teceze, { loadData as TecezeData, getMetaData as TecezeMeta } from "../pages/caseStudy/subpages/Teceze";
import Enquiry, { loadData as EnquiryData, getMetaData as EnquiryMeta } from "../pages/enquiry/Enquiry";
import HomePage, { loadData as HomePageData, getMetaData as HomePageMeta } from "../pages/homePage/HomePage";
import PrivacyNotice, { loadData as PrivacyData, getMetaData as PrivacyMeta } from "../pages/privacy/PrivacyNotice";
import Services, { loadData as ServicesData, getMetaData as ServicesMeta } from "../pages/services/Services";
import Solutions, { loadData as SolutionsData, getMetaData as SolutionsMeta } from "../pages/solutions/Solutions";
import TermsAndConditions, { loadData as TermsData, getMetaData as TermsMeta } from "../pages/terms/TermsAndConditions";
import Thanks, { loadData as ThanksData, getMetaData as ThanksMeta } from "../pages/thanks/Thanks";
import WhyDs, { loadData as WhyDsData, getMetaData as WhyDsMeta } from "../pages/whyds/WhyDs";
import Blog, { loadData as BlogData, getMetaData as BlogMeta } from "../pages/blog/blog";

const routes = () => {
  return [
    {
      path: "/",
      exact: true,

      component: HomePage,
      element: <HomePage />,
      loadData: HomePageData,
      getMetaData: HomePageMeta
    },
    {
      path: "/services",
      private: true,
      component: Services,
      element: <Services />,
      loadData: ServicesData,
      getMetaData: ServicesMeta
    },
    {
      path: "/solutions",
      exact: true,
      component: Solutions,
      element: <Solutions />,
      loadData: SolutionsData,
      getMetaData: SolutionsMeta
    },
    {
      path: "/why-drupal",
      exact: true,
      component: WhyDs,
      element: <WhyDs />,
      loadData: WhyDsData,
      getMetaData: WhyDsMeta
    },
    {
      path: "/enquiry",
      exact: true,
      component: Enquiry,
      element: <Enquiry />,
      getMetaData: EnquiryMeta
    },
    {
      path: "/case-studies",
      exact: true,
      component: CaseStudy,
      element: <CaseStudy />,
      loadData: CaseStudyData,
      getMetaData: CaseStudyMeta
    },
    {
      path: "/case-study/medipro-aesthetics",
      exact: true,
      component: Medipro,
      element: <Medipro />,
      loadData: MediproData,
      getMetaData: MediproMeta
    },
    {
      path: "/case-study/pje-automotive-ltd",
      exact: true,
      component: PjeAuto,
      element: <PjeAuto />,
      loadData: PjeAutoData,
      getMetaData: PjeAutoMeta
    },
    {
      path: "/case-study/nhtsa",
      exact: true,
      component: Nhtsa,
      element: <Nhtsa />,
      loadData: NhtsaData,
      getMetaData: NhtsaMeta
    },
    {
      path: "/case-study/teceze",
      exact: true,
      component: Teceze,
      element: <Teceze />,
      loadData: TecezeData,
      getMetaData: TecezeMeta
    },

    {
      path: "/privacy-notice",
      exact: true,
      component: PrivacyNotice,
      element: <PrivacyNotice />,
      loadData: PrivacyData,
      getMetaData: PrivacyMeta
    },    
    {
      path: "/terms-conditions",
      exact: true,
      component: TermsAndConditions,
      element: <TermsAndConditions />,
      loadData: TermsData,
      getMetaData: TermsMeta
    },
    {
      path: "/thanks",
      exact: true,
      component: Thanks,
      element: <Thanks />
    },
    {
      path: "/blogs",
      exact: true,
      component: CaseStudy,
      element: <Blog />,
      loadData: BlogData,
      getMetaData: BlogMeta
    },
  ];
};

export default routes;
