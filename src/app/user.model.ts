export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;
  squadNum: number;

  constructor(){
    this.image = "";
    this.name = "";
    this.provider = "";
    this.squadNum = null;
  }
}
