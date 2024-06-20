import React from 'react';

export default function TdnCategoryList({renderTdnCategories}) {
    console.log("renderTdnCategories: ", renderTdnCategories);
    let tdnCatrgoryElenent = renderTdnCategories = renderTdnCategories.map((TdnCategory,Index)=>{
        return(
                    <tr key={Index}>
                        <th>{Index+1}</th>
                        <th>{TdnCategory.TdnId}</th>
                        <th>{TdnCategory.TdnCategoryName}</th>
                        <th>{TdnCategory.TdnCategoryStatus?"Hiển thị":"Tạm khóa"}</th>
                        <th>
                        </th>
                    </tr>
                )
                    });
     return (
        <div className="container m-2" >
            <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
            <table className="table table-striped table-bordered">
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Mã loại</th>
                         <th>Tên loại</th>
                         <th>Trạng thái</th>
                         <th>Chức năng</th>
                     </tr>
                 </thead>
            </table>
            <button className ="btn btn-primary">Thêm mới </button>
        </div>
     )
}
    