export class Serie {
    id: number;
    titulo: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    enlace: string;
    imagen: string;

    constructor(id: number, titulo: string, canal: string, temporadas: number, descripcion: string, enlace: string, imagen: string) {
        this.id = id;
        this.titulo = titulo;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.imagen = imagen;
    }
}


