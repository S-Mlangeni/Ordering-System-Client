/// <reference path="../typings/globals/jquery/index.d.ts" />

$.get("https://ordering-system-server.herokuapp.com/get.php"/*"http://localhost/Drinks_Ordering_System/Ordering_System_Server/get.php"*/, function(serverdata, ourgetstatus) {
    $(".fas").css({
        "display": "none"
    });
    $("#orders").html(serverdata); //This is similar to the load method.
    console.log(ourgetstatus);
    selector();
});

function selector() {
    $("button[id='cancel-btn']").click(function() {
        $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
        const cancel = $(this).prop("name");
        $.post("https://ordering-system-server.herokuapp.com/delete.php"/*"http://localhost/Drinks_Ordering_System/Ordering_System_Server/delete.php"*/, {
            "cancelledDrink": cancel
        }, function(returnedData, ourpoststatus) {
            $("#orders").html(returnedData);
            console.log(ourpoststatus);
            $("button[id='cancel-btn']").text("Cancel");
            selector();
        });
    });
}

$("#order-btn").click(function() {
    $(this).html("<i class='fas fa-spinner fa-spin fas-off'></i>");
    const enteredName = $("#name").val();
    const enteredDrink = $("#drink").val();
    $.post("https://ordering-system-server.herokuapp.com/post.php"/*"http://localhost/Drinks_Ordering_System/Ordering_System_Server/post.php"*/, {
        "submittedName": enteredName,
        "submittedDrink": enteredDrink
    }, function(returnedData, ourpoststatus) {
        $("#orders").html(returnedData);
        console.log(ourpoststatus);
        $("#order-btn").text("Order");
        $("#name").val("");
        $("#drink").val("");
        selector();
    });
});

/*$("#name").keyup(function() {
    const enteredName = $("#name").val();
    $.post("./dbsuggestiondata.php", {
        "submittedName": enteredName
    }, function(returnedData, ourpoststatus) {
        $(".btn3-class").html(returnedData);
        console.log(ourpoststatus);
    }); /* Unlike the load method, the get method takes in 
    only two parameters as seen above */
//});


