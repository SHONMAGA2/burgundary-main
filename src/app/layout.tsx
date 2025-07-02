import React from 'react';


export default function layout({children}:{children:React.ReactNode}){
return(
<html lang="eng">
<body className="bg-[#F8F8F0] text-[#800020]">
<div className="layout">
{children}
</div>
</body>
</html>
)
}
