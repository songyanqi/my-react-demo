import axios from 'axios';

let $get    = ( url , params , success , error) => axios.get(url , { params } ).then( success ).catch( err => { console.log(err); if( error ) error() } ),

    $post   = ( url , params , success , error) => axios.post(url , params ).then( success ).catch( err => { console.log(err); if( error ) error() } ),

    $put    = ( url , params , success , error) => axios.put(url , params ).then( success ).catch( err => { console.log(err); if( error ) error() } ),

    $delete = ( url , params , success , error) => axios.delete(url , { params } ).then( success ).catch( err => { console.log(err); if( error ) error() } ),

    $patch = ( url , params , success , error) => axios.patch(url , { params } ).then( success ).catch( err => { console.log(err); if( error ) error() } );

    export const $http    = { $get, $post, $put, $delete, $patch }