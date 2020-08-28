export const containerTemplate = `
  <div class="el-card box-card is-always-shadow driver-info" style="width: 290px">
    <div class="el-card__header" style="padding: 15px !important; height: 46px">
      <p><%= infoTitle %></p>
      <button type="button"
        class="el-button el-button--text infowindow-close"
        <span style="color: #f56c6c;font-size: 12px">关闭</span>
      </button>
    </div>
    <div class="el-card__body" style="padding: 10px 15px!important;">
      <%= infoBody %>
    </div>
  </div>
`

export const infoTitleTemplate = `
`
export const infoBodyTemplate = `
      <div class="info-body">
          <p class="info">
              司机姓名： <span class="margin-left-right"><%= driverName %></span>
          </p>
          <p class="info">
              司机电话： <span class="margin-left-right"><%= driverMobile %></span>
          </p>
          <p class="info">
              车牌： <span class="margin-left-right"><%= plateNum %></span>
          </p>
    </div>
  `
