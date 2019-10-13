import { AngularFireModule } from "@angular/fire";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { HTTP } from "@ionic-native/http/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { File } from "@ionic-native/File/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { FormUploadComponent } from "./upload/form-upload/form-upload.component";
import { ListUploadComponent } from "./upload/list-upload/list-upload.component";
import { DetailsUploadComponent } from "./upload/details-upload/details-upload.component";

@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent
  ],
  entryComponents: [],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
