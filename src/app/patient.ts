


export class Patient {

    private id: string;
    private name: string;
    private gender: string;
    private email: string;
    private bloodgroup : string;
    private phone: string;
    private birthdate: Date;
    private weight: string;
    private photo: any;
    private address: any;

    public getId(){ return this.id;}
    public getName(){ return this.name;}
    public getGender(){ return this.gender;}
    public getEmail(){ return this.email;}
    public getBloodgroup(){ return this.bloodgroup;}
    public getPhone(){ return this.phone;}
    public getBirthdate(){ return this.birthdate;}
    public getWeight(){ return this.weight;}
    public getPhoto(){ return this.photo;}
    public getAddress(){ return this.address;}


    public setId(id){ this.id = id; }
    public setName(name){ this.name = name; }
    public setGender(gender){ this.gender = gender; }
    public setEmail(email){ this.email = email; }
    public setBloodgroup(bloodgroup){ this.bloodgroup = bloodgroup; }
    public setPhone(phone){ this.phone = phone; }
    public setBirthdate(birthdate){ this.birthdate = birthdate; }
    public setWeight(weight){ this.weight = weight; }
    public setPhoto(photo){ this.photo = photo; }
    public setAddress(address){ this.address = address; }


    // constructor(id, name, gender, email, bloodgroup, phone,birthdate, weight,photo,address){
    //     this.id = id;
    //     this.name = name;
    //     this.gender = gender;
    //     this.email = email;
    //     this.bloodgroup = bloodgroup;
    //     this.phone = phone;
    //     this.birthdate = birthdate;
    //     this.weight = weight;
    //     this.photo = photo;
    //     this.address = address;
    // }

    constructor(name, gender, email, bloodgroup, phone){
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.bloodgroup = bloodgroup;
        this.phone = phone;
    }

    
}