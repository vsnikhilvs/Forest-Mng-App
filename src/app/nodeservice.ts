import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    getFilesystem() {
    return this.http.get<any>('assets/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getFlatFilesystem() {
      return this.http.get<any>('assets/filesystemFlat.json')
        .toPromise()
        .then(res => <TreeNode[]>res.data);
      }

}