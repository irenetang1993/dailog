<template>
  <!--A弹框-->
  <div v-show="visible">
    <el-dialog v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      class="add-prod-dialog"
      ref="addProdDl">
      <div slot="title">
        <span class="el-dialog__title">新增商品</span>
        <div class="right">
          <el-button v-if="returnVisible" @click="returnTo" size="small" class="btn-icon-return"></el-button>
          <el-button @click="close" size="small" class="btn-icon-close"></el-button>
        </div>
      </div>
      <!--body C-->
      <add-way v-if="showTo === cst.ADD_WAY_VISIBLE" @blankAdd="openBlankAddDlg">
      </add-way>
      <!--body D-->
      <search-prod v-if="showTo === cst.SEARCH_PROD_VISIBLE"
        @blankAdd="openBlankAddDlg"
        @continueAdd="openEditProdDlg">
      </search-prod>
    </el-dialog>
    <!--通过body C中的按钮弹出来的弹框，与弹框A并列-->
    <dl-blank-add ref="blankAddDl"></dl-blank-add>
    <!--通过body D中的按钮弹出来的弹框，与弹框A并列-->
    <dl-edit-prod type="copy" ref="editProdDl"></dl-edit-prod>
  </div>
</template>

<script>
  import addWay from './addWay'
  import searchProd from './searchProd'
  import dlBlankAdd from './dlBlankAdd'
  import dlEditProd from './dlEditProd'
  import * as cst from '../../const'

  export default {
    data () {
      return {
        visible: false,
        showTo: '',
        cst
      }
    },
    computed: {
      returnVisible () {
        return this.showTo === cst.SEARCH_PROD_VISIBLE
      }
    },
    components: {
      addWay, searchProd, dlBlankAdd, dlEditProd
    },
    methods: {
      open () {
        this.showTo = cst.ADD_WAY_VISIBLE
        this.visible = true
      },
      close () {
        this.visible = false
      },
      returnTo () {
        if (this.showTo === cst.SEARCH_PROD_VISIBLE) {
          this.showTo = cst.ADD_WAY_VISIBLE
        }
      },
      openBlankAddDlg (barcode) {
        this.$refs.blankAddDl.open(barcode || '')
      },
      openEditProdDlg (spuId) {
        this.$refs.editProdDl.open({ spuId })
      }
    }
  }
</script>
