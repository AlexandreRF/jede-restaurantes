var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="promocoes"]', function (e) {
    firebase.database().ref('Promocoes').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().Dia +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Mistura +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Acompanhamento +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});