import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  preview: any;
  image: string | undefined;
  username: string | undefined;
  email: string | undefined;
  watchlist: number | undefined;
  seenlist: number | undefined;
  loading = false;
  error: string | null = null;
  selectedImage: string | undefined;

  constructor(private store: StoreService, private api: ApiService) {}

  ngOnInit(): void {
    this.email = this.store.user$.value?.email;
    this.image = this.store.user$.value?.image;
    this.username = this.store.user$.value?.username;
    this.watchlist = this.store.user$.value?.watchlist?.length;
    this.seenlist = this.store.user$.value?.seenlist?.length;
    console.log(this.store.user$.value);
  }

  imageChangeHandler(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.selectedImage = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => (this.preview = event.target?.result);
  }

  uploadAvatar() {
    if (!this.selectedImage) return;

    const formData: FormData = new FormData();
    formData.append('file', this.selectedImage);
    formData.append('upload_preset', 'at8uczqk');

    this.error = null;
    this.loading = true;

    this.api.updateAvatar(formData).subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not upload image!';
        this.loading = false;
      },
    });
  }
}
