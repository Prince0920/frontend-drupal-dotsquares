import WebApi from "../../config/WebApi";
const HomeServices = {
    getBussinessSection: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/homepage/why-choose-drupal-content");
    },
    whyDS: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/homepage/why-dotsquares")
    },
    getServices: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/homepage/services")
    },
    getUpgradeSaction: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/homepage/upgrade-drupal9")
    },
    getCaseStudy: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/case-study")
    },
    getIntegrations: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/homepage/drupal-integrations")
    },
    getTestimonials: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/testimonials")
    },
    getBrands: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/trust-big-small-everyday")
    },
    getMetaData: (page) => {
        return WebApi.getRequest("https://drupal2.24livehost.com/metatags/" + page)
    },
    getAllServices: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/services")
    },
    getServiceBlock: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/services/discuss-drupal-projects")
    },
    whyCooseDS: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/services/why-choose-dotsquare")
    },
    getSolutions: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/solutions/drupal-solutions")
    },
    getDrupalSolution: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/solutions/drupal-solutions-section")
    },
    getKeyFeatures: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/solutions/solutions-drupal-expert")
    },
    whyCooseDrupal: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/why-drupal/why-choose-drupal")
    },
    whatIsDrupal: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/why-drupal/what-is-drupal")
    },
    drupalNewWay: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/why-drupal/drupal-new-way")
    },
    drupalKeyFeature: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/why-drupal/drupal-key-features")
    },
    whatDrupalMeans: () => {
        return WebApi.getRequest("https://drupal2.24livehost.com/sections/why-drupal/what-drupal-means")
    },
    getCaseStudyData: (id) => {
        return WebApi.getRequest("https://drupal2.24livehost.com/case-study/"+id)
    },
    getPrivacyPolicy: (id) => {
        return WebApi.getRequest("https://drupal2.24livehost.com/privacy-policy")
    },
    getTermsAndConditions: (id) => {
        return WebApi.getRequest("https://drupal2.24livehost.com/terms-and-conditions")
    }
}

export default HomeServices;