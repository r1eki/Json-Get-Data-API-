function load_data(){
    $.ajax({
        url         : "https://my-json-server.typicode.com/destri8/demo/data",
        type        : "GET",
        dataType    : "json",
        data        : {get_param : 'value'},
        success     : function(data){
         jmlData = data.length;
        //variabel untuk menampung tabel yang akan digenerasikan
        buatTabel = "";

        //perulangan untuk menayangkan data dalam tabel
        for(a = 0; a < jmlData; a++){
            //console.log(data[0]);
            //mencetak baris baru
            buatTabel += "<tr>"
                        // //membuat penomoran
                        // + "<td>" + (a+1) + "</td>"
                        //mencetak nama
                        + "<td>" + data[a]["fullname"] + "</td>"
                        //mencetak gambar
                        + "<td><img src='" + data[a]["photo"] + "'/></td>"
                        //mencetak jumlah trx_count
                        + "<td>" + data[a]["trx_count"] + "</td>"
                        //mencetak jumlah presentasi amount
						+ "<td><div class='progress blue-grey lighten-4'><div class='determinate' light-blue darken-1' style='width" + data[a]["trx_amount"] / (90000+1000000+10000) * 100  + "'></div><div></td>"
            //tutup baris baru
            + "<tr/>";
        
        }    $('.isi_tabel').append(buatTabel);

    }
});

}
