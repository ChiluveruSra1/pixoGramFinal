import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { FollowModel } from '../models/follow.model';
import { UpdateModel } from '../models/update.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8001/pixo/user';

  private followUrl='http://localhost:8003/pixo/follow'

  constructor(private http: HttpClient) { }
  
  firstName: String;
  username: String;
  id: Number;
  email: String;

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // getUsers(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

  getUserByName(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  getLoginByName(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/login/${username}`);
  }
  
  createUser(user: UserModel): Observable<Object> {
    console.log(user)
    return this.http.post(`${this.baseUrl}/create`,user);
  }

  follow(follow:FollowModel): Observable<Object> {
    return this.http.post(`${this.followUrl}`+`/create`,follow);
  }

  getFollowing(userid: number): Observable<Object>{
    return this.http.get(`http://localhost:8003/pixo/follow/following/`+`${userid}`)
  }

  getFollower(userid: number): Observable<Object>{
    return this.http.get(`http://localhost:8003/pixo/follow/follower/`+`${userid}`)
  }
 
  updateUser(user: UpdateModel,userid:number): Observable<Object> {

    return this.http.put(`${this.baseUrl}`+`/update/`+`${userid}`,user);
  }

  


}



/*   =========================================================================================== */

 /*  updateUser(password: string): Observable<Object> {
    return this.http.put(this.baseUrl+'/'+this.id+'/'+password,{ responseType: 'text' });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  
  getOtherUsers(): Observable<any> {
    return this.http.get(this.baseUrl+'s/'+this.id);
  }

  following(uid: number): Observable<any> {
    return this.http.get('http://localhost:8003/following/' + uid);
  }
  
  followers(uid: number): Observable<any> {
    return this.http.get('http://localhost:8003/followers/' + uid);
  }

  unfollow(uid:number, fid:number): Observable<any> {
    return this.http.delete('http://localhost:8003/follow/unfollow/' + uid + '/' + fid);
  }
  
  block(id: number) { 
    return this.http.put('http://localhost:8003/follow/block/'+this.id+'/'+id,{ responseType: 'text' })
  }

  getBlockedUsers() :Observable<any>{
    return this.http.get('http://localhost:8003/follow/getblockedusers/'+this.id); 
  }

  unblock(id: number) {
    return this.http.put('http://localhost:8003/follow/unblock/'+this.id+'/'+id,{responseType: 'text'})
  } 
*/