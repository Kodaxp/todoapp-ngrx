export class TodoModel {
  id: number;
  texto: string;
  completado: boolean;

  constructor(texto) {
    this.texto = texto;
    this.id = Math.random();
    this.completado = false;
  }
}
