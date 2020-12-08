import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { User } from './User';
import { from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) {
   }


  public doRegistration(){  
    return this.http.get<User>("http://localhost:9090/registerrmu1");
  }
  public doRegistrationrmu2(){  
    return this.http.get<User>("http://localhost:9090/registerrmu2");
  }

  public readtransformer1(){  
    return this.http.get("http://localhost:9090/read/1");
  }

  public readtransformer2(){  
    return this.http.get("http://localhost:9090/read/2");
  }
  public readtransformer3(){  
    return this.http.get("http://localhost:9090/read/3");
  }
  public readtransformer4(){  
    return this.http.get("http://localhost:9090/read/4");
  }

  public readhome1(){  
    return this.http.get("http://localhost:9090/readhome/1");
  }

  public readhome2(){  
    return this.http.get("http://localhost:9090/readhome/2");
  }

  public readhome3(){  
    return this.http.get("http://localhost:9090/readhome/3");
  }

  public readhome4(){  
    return this.http.get("http://localhost:9090/readhome/4");
  }


  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }



  public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}
