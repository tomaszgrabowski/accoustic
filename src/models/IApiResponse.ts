export interface IApiResponse {
    rev: string;
    thumbnail: Thumbnail;
    keywords: any[];
    kind: any[];
    created: string;
    creatorId: string;
    description: string;
    classification: string;
    type: string;
    locale: string;
    tags: any[];
    selectedLayouts: SelectedLayout[];
    elements: Elements;
    name: string;
    lastModifierId: string;
    typeId: string;
    links: Links;
    id: string;
    lastModified: string;
    systemModified: string;
    status: string;
}

interface Links {
    thumbnail: Thumbnail2;
    retire: Thumbnail2;
    draft: Thumbnail2;
    self: Thumbnail2;
    type: Thumbnail2;
}

interface Thumbnail2 {
    href: string;
}

interface Elements {
    heading: Heading;
    author: Heading;
    body: Body;
    date: Heading;
    mainImage: MainImage;
}

interface MainImage {
    elementType: string;
    value: Value;
    typeRef: Layout;
}

interface Value {
    leadImage: LeadImage;
    leadImageCaption: Heading;
    leadImageCredit: Heading;
}

interface LeadImage {
    mode: string;
    profiles: string[];
    renditions: Renditions;
    asset: Asset;
    elementType: string;
    url: string;
}

interface Asset {
    fileName: string;
    altText: string;
    fileSize: number;
    width: number;
    mediaType: string;
    id: string;
    resourceUri: string;
    height: number;
}

interface Renditions {
    lead: Lead;
    card: Lead;
    default: Default;
}

interface Default {
    width: number;
    source: string;
    height: number;
    url: string;
}

interface Lead {
    source: string;
    width: number;
    height: number;
    transform: Transform;
    url: string;
}

interface Transform {
    scale: number;
    crop: Crop;
}

interface Crop {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Body {
    values: string[];
    elementType: string;
}

interface Heading {
    elementType: string;
    value: string;
}

interface SelectedLayout {
    layout: Layout;
}

interface Layout {
    id: string;
}

interface Thumbnail {
    id: string;
    url: string;
}
