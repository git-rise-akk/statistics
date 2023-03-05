$(document).ready(function() {
    const rates = {
        'el': 6,
        'hvs': 43,
        'gvs': 205,
    } 

    let data = [
        {
            'date': '07.02.2023',
            'el': 1213,
            'hvs': 36,
            'gvs': 24,
        }
    ];

    let difference = [];

    $('.button').click(function() {
        data.push({
           'date': $('input.date').val(),
           'el': Number($('input.el').val()),
           'hvs': Number($('input.hvs').val()),
           'gvs': Number($('input.gvs').val()),
        });

        difference.push({
            'date': data[data.length - 2].date,
            'el': data[data.length - 1].el -  data[data.length - 2].el,
            'hvs': data[data.length - 1].hvs -  data[data.length - 2].hvs,
            'gvs': data[data.length - 1].gvs -  data[data.length - 2].gvs,
        });
        
        const paymentАmount = (difference[difference.length - 1].el * rates.el) + (difference[difference.length - 1].hvs * rates.hvs) + (difference[difference.length - 1].gvs * rates.gvs);
        $('.result-sum').html(paymentАmount + '<br /><sup>рублей</sup>');
       $(this).hide(500);
       $('h1').text('К ОПЛАТЕ');
       $('.content').css('transform', 'translateX(-100%)');
    });
});