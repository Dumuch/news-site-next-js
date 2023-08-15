export enum VideoType {
    Mp4 = 'video/mp4',
    Mov = 'video/quicktime',
    M4v = 'video/m4v',
    Mpeg = 'video/mpeg',
    Avi = 'video/avi',
}

export enum ImageType {
    Jpeg = 'image/jpeg',
    Png = 'image/png',
    Webp = 'image/webp',
    GIf = 'image/gif',
}

export enum TextType {
    Plain = 'text/plain',
}

const MimeTypes = { VideoType, ImageType };
export default MimeTypes;
