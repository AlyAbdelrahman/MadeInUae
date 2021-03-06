import {products,productsName} from './products';
import {sector} from './sector'
export interface companyDetails{
    
    "id": number,
    "name": string,
    "nameAr":string ,
    "image": string,
    "description": string,
     "descriptionAr": string,
     "phone": string,
    "secondPhone":string,
    "address":string,
    "addressAr": string,
    "mapFrameUrl":string,
     "longtitude": string,
     "latitude":string,
     "fax":string,
     "website":string,
     "mailBox": string,
     "email":string,
     "facebook":string,
     "twitter": string,
    "google": string,
    "youTubeVideoUrl":string,
    "youTube": string,
    "snapChat": string,
    "order": number,
    "instagram": string,
    "communicationOfficerName": string,
    "communicationOfficerNameAr": string,
    "communicationOfficerPosition": string,
    "communicationOfficerPositionAr": string,
    "communicationOfficerPhone": string,
    "communicationOfficerEmail": string,
    "branches": string[],
    "products":products[],
    "companyProductNames": productsName[],
    "sectorId": number,
    "sector": sector
  }