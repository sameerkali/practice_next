import React from "react";

const page = ({ params }: { params: { productid: String } }) => {
  return (
    <div>
      products all {params.productid}
    </div>
  );
};

export default page;
