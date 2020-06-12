export interface Person {
    // trcid: string;
    // location:
    // {
    //   name: string;
    //   city: string;
    //   zipcode: string;
    //   adress: string;
    // };
    // dates: { startdate: string; };
    // urls: any;
    // media: {url:any};

    id: string;
    isActive: boolean;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    disabled?: boolean;
}