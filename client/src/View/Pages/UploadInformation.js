import React from "react";

export default function UploadInformation() {
  return (
    <div>
      <p>logo</p>
      <h1>העלאת מידע</h1>
      uploadinforamtion
      <form>
        <label>
          מידע עבור
          <input type="text" name="name" />
        </label>
        <label>
          כותרת
          <input type="text" name="title" />
        </label>
        <label>
          תיאור
          <input type="text" name="desc" />
        </label>
        <label>
          קישור עבור המידע
          <input type="text" name="link" />
        </label>
        <input type="submit" value="שתפ/י" />
      </form>
    </div>
  );
}
