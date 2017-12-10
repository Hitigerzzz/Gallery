1.  弹出框三角形的实现

    用 before 和 after 写出两个三角形，一个叠在另外一个上面。

    网上有一种设置 border-width 为 20px（举个例子），width，height 为 0 的div ，把其他 border 的颜色设置为 transparent 即可实现三角形。

2.  Follow Button 样式不生效

    class 选择器的问题，在 Follow Button 最外层的 div 设置一个 class。增加多一层 class 选择即可让样式生效。

3.  图片悬停出现悬浮层

    ```html
     <div class="container">
        <img alt="item" src={src} />
        <div class="info">
          <h3>test content</h3>
        </div>
     </div>
    ```

    ```css
    .container {
      position: relative;
    }  
    .info {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        //-webkit-backface-visibility: hidden;
        //backface-visibility: hidden;
        background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,transparent 40%,transparent 60%,rgba(0,0,0,.3));
        opacity: 0;
        @include transition(all .15s ease-in-out);
      }

      .container:hover .info {
        opacity: 1;
      }
    ```

4.  first-child 生效

    `p:first-child` 第一个 p

    `p :first-child` p 的第一个子元素

5.  解决导航栏弹出框被其他 div （假设为a）挡住

    有两个关键点

    1.  弹出框的父元素 div （也可能是祖父元素或者就是弹出框本身元素，总之一定是要跟 a 同级的元素）的 z-index 属性比 div a 的大
    2.  只有元素设置了 position 属性（并且是非默认的 static） z-index 才生效

6.  保证图片填充父级元素且不模糊，保持原来的比例

    ```html
    <div><img /></div>
    ```

    ```css
    // scss 写法
    div {
      position: relative;
      
      img {
         position: absolute;
      	left: 0;
      	width: 100%;
      	height: 100%;
      	object-fit: cover;
      }
    }
    ```

    object-fit 的五个值

    -   **fill**: 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。
    -   **contain**: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
    -   **cover**: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。
    -   **none**: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
    -   **scale-down**: 中文释义“降低”。就好像依次设置了**none**或**contain**, 最终呈现的是尺寸比较小的那个。

7.  移动到 container 显示遮盖层 info 的实现

    ```scss
    .container {
      position: relative;

      .info {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,transparent 40%,transparent 60%,rgba(0,0,0,.3)); // 遮盖层颜色
        opacity: 0; // 相当于隐藏
        transition: all .15s ease-in-out;
        }

      &:hover .info {
        opacity: 1; // 显示遮盖层
      }
    }
    ```

8.  背景图片蒙版的实现

    ```html
    <div class="background" style="background-image: url('图片路径')">
    	<div class="container"></div>
    </div>
    ```

    ```css
    .background {
      position: relative;
      background-position: 50%;
      background-size: cover;
      z-index: 1;

      &:before { // 蒙版效果
        position: absolute;
        right: 0;
        left: 0;
        display: block;
        height: 100%;
        content: "";
        background: linear-gradient(hsla(0, 0%, 100%, .8), hsla(0, 0%, 100%, .9) 50%, $theme-purple-color-ultra-light);
      }

      .container {
        position: relative; // 让 container 不会被蒙版遮盖住
      }

    }
    ```

9.  javascript fetch 跨域请求时 session失效问题

    javascript 使用fetch进行跨域请求时默认是不带cookie的，所以会造成 session失效。

    解决办法：在请求中添加 credentials: 'include',

    ```javascript
    export function login(user) {
      return request(`${USER_API}login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    }
    ```


    ```javascript
    export function fetchUserLoginInfo() {
      return request(`${USER_API}userLoginInfo`, {
        credentials: 'include',
      });
    }
    ```

10.  sql 主键 Id 为 autoincrement，某一字段如 avatar 设置了默认值时，在向表中 insert 数据时不用写出这些字段，下面例子忽略了 id 和 avatar

    ```
    user: 'user (username, address, description, password) values(?, ?, ?, ?)',
    ```

11.  express 获得 formdata 数据

     前端请求：

     ```javascript
     export function uploadPicture(picture) {
       /* eslint-disable no-undef */
       const formData = new window.FormData();
       formData.append('title', picture.title);
       formData.append('category', picture.category);
       formData.append('description', picture.description);
       formData.append('file', picture.file);
       formData.append('postTime', picture.postTime);
       formData.append('userId', picture.userId);
       return request(`${IMG_API}upload`, {
         method: 'POST',
         contentType: 'multipart/form-data',
         body: formData,
       });
     }
     ```

     后端 express 处理 ，使用express的中间件connect-multiparty ,它是专门处理此类post数据相关的依赖包。

     ```
     const multipart = require('connect-multiparty');
     const multipartMiddleware = multipart();
     router.post('/upload', multipartMiddleware, (req, res) => {
       console.log(req.body);
       res.end();
     });
     ```

     ​