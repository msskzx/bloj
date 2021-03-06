<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
  protected $fillable = ['title', 'body', 'published_at'];

  public function user() {
    return $this->belongsTo('App\User');
  }

  public function tags() {
    return $this->belongsToMany('App\Tag');
  }

  public function getTagListAttribute() {
    return $this->tags->lists('id')->all();
  }

}
