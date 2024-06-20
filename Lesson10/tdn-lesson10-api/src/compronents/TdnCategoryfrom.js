import React from "react";

export default function TdnCategoryFrom() {
    return (
        <div>
            <form>
            <div class="input-group-mb-3">
             <span for="staticEmail" id="basic-addon1">Category</span>
             <div class="col-sm-10">
            <input type="text"  className="form-control"  name="tdnCategoryName"
            placeholder="Category Name" aria-label="Catergory Name"
            aria-describedby="basic-addon1"/>
            </div> 
            
            </div>
            </form>
        </div>
    );
}