export class Topic {
    title: string; 
    _id: string;
    author: string;
    year: number;
    imgUrl: string; 
    description: string;
    genre: string;
}

export class Reply {
    name: string; 
    content: string;
    datetime: string;
}

export class Credentials {
    username: string; 
    password: string;
}

export class Session {
    _id: string;
    name: string; 
    priority: number;
    pie: string; 
}
