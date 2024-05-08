function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function send() {
    "use strict";
  
    let repButton = document.querySelector(
      'button[title="开始撰写对此帖子的回复"]'
    );
    repButton.click();
    await delay(1000);
    let repTextarea = document.querySelector("textarea");
    repTextarea.autofocus = true;
    repTextarea.click();
    repTextarea.focus();
    repTextarea.value = Math.floor(Math.random() * 9000000000) + 1000000000;
    let event = new Event("input", { bubbles: true });
    repTextarea.dispatchEvent(event);
    await delay(1000);
    let saveButton = document.querySelector(".save-or-cancel button");
    saveButton.click();
  }
  async function rep(dut) {
    let success = 0;
    let error = 0;
    for (let i = 0; i < dut; i++) {
      try {
        await send();
        success++;
        console.log(`评论成功 ${success} 次`);
      } catch (e) {
        error++;
        console.log(`评论失败 ${error} 次`);
      } finally {
        await delay(2000);
      }
    }
    console.log(`执行完毕, 其中成功评论 ${success} 次, 失败评论 ${error} 次`);
  }
  
  function main() {
      // 创建模态框和相关元素
      var modal = document.createElement("div");
      var content = document.createElement("div");
      var title = document.createElement("h1");
      var input = document.createElement("input");
      var okButton = document.createElement("button");
      var cancelButton = document.createElement("button");
    
      // 设置元素属性
      modal.style.display = "none";
      modal.style.position = "fixed";
      modal.style.zIndex = "1000";
      modal.style.left = "0";
      modal.style.top = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.overflow = "auto";
   
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
    
      content.style.backgroundColor = "white";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "500px";
      content.style.height = "300px";
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.justifyContent = "center";
      content.style.alignItems = "center";
    
      title.textContent = "请设置要评论的次数";
    
      input.type = "number";
      input.min = "0";
    
      okButton.textContent = "OK";
      cancelButton.textContent = "Cancel";
    
      // 添加事件处理器
      okButton.onclick = function () {
        var value = input.value;
        input.value = "";
        modal.style.display = "none";
        rep(Number(value))
       
      };
    
      cancelButton.onclick = function () {
        input.value = "";
        modal.style.display = "none";
      };
    
      // 将元素添加到模态框和文档中
      content.appendChild(title);
      content.appendChild(input);
      content.appendChild(okButton);
      content.appendChild(cancelButton);
      modal.appendChild(content);
      document.body.appendChild(modal);
    
      // 显示模态框
      modal.style.display = "flex";
    }
    
    main();
  