import { Auth } from 'aws-amplify';
import { EmailRegexString, PasswordRegexString } from '../Helpers';
import { Post } from '../Model/Post';

export class PostControllerClass {
	constructor() {
    }

    public GetLatestPosts() {
        return TempLatestPosts;
    }
}

let TempLatestPosts =
[
    { 
        Id: '1',
        Title: 'New Perspectives on HTML5, CSS3 & Javascript',
        OwnerID: 'nguyenh57@student.douglascollege.ca',
        Description: '',
        ProgramCode: 'CSIS',
        ClassCode: '1280',
        ClassName: 'Multimidia Web Development',
        Price: 139.5,
        Thumnail: '',
        Author: '',
        Isbn: '978-1-305-50392-2',
        IsNegotiable: true,
        IsSold: false
    } as Post,
    { 
        Id: '2',
        Title: 'SYSTEMS ANALYSIS & DESIGN, 11TH ED',
        OwnerID: 'nguyenh57@student.douglascollege.ca',
        Description: '',
        ProgramCode: 'CSIS',
        ClassCode: '2200',
        ClassName: 'SYSTEMS ANALYSIS & DESIGN',
        Price: 150,
        Thumnail: '',
        Author: '',
        Isbn: '978-1-305-49460-2',
        IsNegotiable: false,
        IsSold: false
    } as Post,
    { 
        Id: '3',
        Title: 'C# PROGRAMMING',
        OwnerID: 'nguyenh57@student.douglascollege.ca',
        Description: '',
        ProgramCode: 'CSIS',
        ClassCode: '1175',
        ClassName: 'INTRODUCTION TO PROGRAMMING',
        Price: 150,
        Thumnail: '',
        Author: '',
        Isbn: '978-1-285-85687-2',
        IsNegotiable: false,
        IsSold: false
    } as Post,
    { 
        Id: '4',
        Title: 'NETWORKING ESSENTIALS',
        OwnerID: 'nguyenh57@student.douglascollege.ca',
        Description: '',
        ProgramCode: 'CSIS',
        ClassCode: '2270',
        ClassName: 'VIRTUALIZATION & COMP NETWORK',
        Price: 75,
        Thumnail: '',
        Author: '',
        Isbn: '978-0-7897-5874-3',
        IsNegotiable: false,
        IsSold: false
    } as Post,
    { 
        Id: '5',
        Title: 'Mockingjay (The Hunger Games)',
        OwnerID: 'nguyenh57@student.douglascollege.ca',
        Description: 'Awesome stories',
        ProgramCode: '',
        ClassCode: '',
        ClassName: '',
        Price: 9.35,
        Thumnail: '',
        Author: '',
        Isbn: '9780545663267',
        IsNegotiable: false,
        IsSold: false
    } as Post,
    { 
        Id: '6',
        Title: 'Test book',
        OwnerID: 'nguyenh57@student.douglascollege.ca',
        Description: 'Just a test book',
        ProgramCode: 'who knows',
        ClassCode: 'same',
        ClassName: 'stop asking',
        Price: 123,
        Thumnail: '',
        Author: '',
        Isbn: '857203948501',
        IsNegotiable: false,
        IsSold: false
    } as Post
]

let UserControllerInstance = new PostControllerClass();
export default UserControllerInstance;
