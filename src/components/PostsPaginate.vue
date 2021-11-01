<template>
  <paginate 
    :pageCount="pageCount" 
    :clickHandler="changePage" 
    :container-class="'pagination'"
    :page-class="'page-item'"
/>
</template>

<script>
import Paginate from "vuejs-paginate";

export default {
    components: { Paginate },
    props: ['pageCount', 'changePage']
}
</script>

<style lang="scss">
.pagination {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    padding: 0;
    justify-content: center;

    li {
        border: 1px solid black;
        padding: 7px 5px;
        margin: 0 5px;
        min-width: 20px;
        text-align: center;

        &.active {
            background: black;
            color: white;
        }
    }
}
</style>