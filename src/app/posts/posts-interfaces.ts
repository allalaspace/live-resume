export interface IPost {
    id?: string; // UUID du post
    thumbnail: string
    http?: string; // Optionnel : lien externe si pas de page interne
    date: string; // For the purpose of stringifying MM-DD-YYYY date format
    markdownFile?: string; // Chemin du fichier markdown dans Supabase Storage
    internationalizations: IPostInternationalization[];
}

export interface IPostInternationalization {
    language: string;
    title: string;
    description: string;
}