import BlogDetail, { blogDetailData } from "../src/containers/Blog/Detail";
import BlogList, { blogData } from "../src/containers/Blog/List";
import CmsScreen, { loadCMSData } from "../src/containers/Cms/CmsScreen";
import ContactusScreen from "../src/containers/ContactUs/ContactusScreen";
import FaqScreen, { loadFAQData } from "../src/containers/Faq/FaqScreen";
import HomeScreen, { loadData } from "../src/containers/Home/HomeScreen";
import Genres, { loadGenres } from "../src/containers/Videos/Genres";
import GenresVideos, {
  loadGenresData,
} from "../src/containers/Videos/GenresVideos";
import TrailerScreen, {
  loadTrailerData,
} from "../src/containers/Videos/TrailerScreen";
import VideoInfo, { loadVideoData } from "../src/containers/Videos/VideoInfo";

const routes = (lang) => {
  return [
    {
      path: "/" + lang,
      exact: true,
      component: HomeScreen,
      loadData: () => loadData(),
    },
    {
      path: "/" + lang + "/genres/",
      exact: true,
      component: Genres,
      // loadData: () => loadGenres(),
    },
    {
      path: "/" + lang + "/genres/:slug",
      exact: true,
      component: GenresVideos,
      // loadData: (slug) => loadGenresData(slug),
      // setSeoData: (apiData) => {
      //   let seoData = {};
      //   seoData.name = apiData.data.name;
      //   seoData.meta_title = apiData.data.name;
      //   seoData.image = apiData.content_url + apiData.data.image;
      //   return seoData;
      // },
    },
    {
      path: "/" + lang + "/faq",
      exact: true,
      component: FaqScreen,
      loadData: () => loadFAQData(),
    },
    {
      path: "/" + lang + "/blogs",
      exact: true,
      component: BlogList,
      loadData: () => blogData(),
    },
    {
      path: "/" + lang + "/blog/:slug",
      exact: true,
      component: BlogDetail,
      loadData: (slug) => blogDetailData(slug),
      setSeoData: (apiData) => {
        let seoData = {};
        seoData.name = apiData.data.name;
        seoData.meta_title = apiData.data.meta_title
          ? apiData.data.meta_title
          : apiData.data.name;
        seoData.meta_keywords = apiData.data.meta_keywords;
        seoData.description = apiData.data.meta_description;
        seoData.image = apiData.blog_img_url + apiData.data.main_image + '?convert=1&h=292&w=560';
        return seoData;
      },
    },
    {
      path: "/" + lang + "/page/:slug",
      exact: true,
      component: CmsScreen,
      loadData: (slug) => loadCMSData(slug),
      setSeoData: (apiData) => {
        let seoData = {};
        seoData.name = apiData.data.name;
        seoData.meta_title = apiData.data.meta_title
          ? apiData.data.meta_title
          : apiData.data.name;
        seoData.meta_keywords = apiData.data.meta_keywords;
        seoData.description = apiData.data.meta_description;
        return seoData;
      },
    },
    {
      path: "/" + lang + "/contact-us",
      exact: true,
      component: ContactusScreen,
    },
    {
      path: "/" + lang + "/trailer/:id",
      exact: true,
      component: TrailerScreen,
      loadData: (data) => loadTrailerData(data),
      setSeoData: (apiData) => {
        let seoData = {};
        seoData.name = apiData.data.title;
        seoData.meta_title = apiData.data.title;
        seoData.image = apiData.content_url + apiData.data.bannerUrl + '?convert=1&h=720&w=1280';
        seoData.description = apiData.data.description;
        return seoData;
      },
    },
    {
      path: "/" + lang + "/video/:slug",
      exact: true,
      component: VideoInfo,
      loadData: (data) => loadVideoData(data),
      setSeoData: (apiData) => {
        let seoData = {};
        if (apiData.data.banner_data) {
          seoData.image = apiData.content_url + apiData.data.banner_data.attachment_name + '?convert=1&h=720&w=1280';
        }
        seoData.name = apiData.data.title;
        seoData.meta_title = apiData.data.title;
        seoData.description = apiData.data.description;
        return seoData;
      },
    },
  ];
};

export default routes;
