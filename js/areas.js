var squareArea = function (l) {
    return l * l;
};
var rectangleArea = function (b, h) {
    return b * h;
};
var triangleArea = function (b, h) {
    return (b * h) / 2;
};
var circleArea = function (r) {
    return Math.PI * r * r;
};
var trapezoidArea = function (minorB, mayorB, h) {
    return ((minorB + mayorB) / 2) * h;
};
var diamondArea = function (minorD, mayorD) {
    return (minorD * mayorD) / 2;
};
var polygonArea = function (s, a, l) {
    return (s * a * l) / 2;
};
var error = function (message, result) {
    message = "Se ha producido un error: " + message;
    result.value = 'ERR';
    console.error(message);
    alert(message);
};
function calculateSquare() {
    var side = document.getElementById('txtSquareSide');
    var result = document.getElementById('txtSquareArea');
    if (isNaN(parseInt(side.value))) {
        error('El lado del cuadrado no es un número', result);
    }
    else if (parseInt(side.value) <= 0) {
        error('El lado del cuadrado está en un rango inválido', result);
    }
    else {
        result.value = squareArea(parseInt(side.value)).toString();
    }
}
function calculateRect() {
    var base = document.getElementById('txtRectBase');
    var height = document.getElementById('txtRectHeight');
    var result = document.getElementById('txtRectArea');
    if (isNaN(parseInt(base.value)) || isNaN(parseInt(height.value))) {
        error('La base o la altura del rectángulo no son números', result);
    }
    else if (parseInt(base.value) <= 0 || parseInt(height.value) <= 0) {
        error('La base o la altura del rectángulo están en un rango inválido', result);
    }
    else {
        result.value = rectangleArea(parseInt(base.value), parseInt(height.value)).toString();
    }
}
function calculateTriangle() {
    var base = document.getElementById('txtTriangleBase');
    var height = document.getElementById('txtTriangleHeight');
    var result = document.getElementById('txtTriangleArea');
    if (isNaN(parseInt(base.value)) || isNaN(parseInt(height.value))) {
        error('La base o la altura del triángulo no son números', result);
    }
    else if (parseInt(base.value) <= 0 || parseInt(height.value) <= 0) {
        error('La base o la altura del triángulo están en un rango inválido', result);
    }
    else {
        result.value = triangleArea(parseInt(base.value), parseInt(height.value)).toString();
    }
}
function calculateCircle() {
    var radius = document.getElementById('txtCircleRadius');
    var result = document.getElementById('txtCircleArea');
    if (isNaN(parseInt(radius.value))) {
        error('El radio del círculo no es un número', result);
    }
    else if (parseInt(radius.value) <= 0) {
        error('El radio del círculo está en un rango inválido', result);
    }
    else {
        result.value = circleArea(parseInt(radius.value)).toString();
    }
}
function calculateTrapezoid() {
    var minorBase = document.getElementById('txtTrapezoidMinorBase');
    var mayorBase = document.getElementById('txtTrapezoidMayorBase');
    var height = document.getElementById('txtTrapezoidHeight');
    var result = document.getElementById('txtTrapezoidArea');
    if (isNaN(parseInt(minorBase.value)) || isNaN(parseInt(mayorBase.value)) || isNaN(parseInt(height.value))) {
        error('Las bases o el altura del trapecio no son números', result);
    }
    else if (parseInt(minorBase.value) <= 0 || parseInt(mayorBase.value) <= 0 || parseInt(height.value) <= 0) {
        error('Las bases o el altura del trapecio están en un rango inválido', result);
    }
    else {
        result.value = trapezoidArea(parseInt(minorBase.value), parseInt(mayorBase.value), parseInt(height.value));
    }
}
function calculateDiamond() {
    var minorDiagonal = document.getElementById('txtDiamondMinorDiagonal');
    var mayorDiagonal = document.getElementById('txtDiamondMayorDiagonal');
    var result = document.getElementById('txtDiamondArea');
    if (isNaN(parseInt(minorDiagonal.value)) || isNaN(parseInt(mayorDiagonal.value))) {
        error('Las diagonales del rombo no son números', result);
    }
    else if (parseInt(minorDiagonal.value) <= 0 || parseInt(mayorDiagonal.value) <= 0) {
        error('Las diagonales del rombo están en un rango inválido', result);
    }
    else {
        result.value = diamondArea(parseInt(minorDiagonal.value), parseInt(mayorDiagonal.value));
    }
}
function calculatePolygon() {
    var sideCount = document.getElementById('txtPolygonSideCount');
    var side = document.getElementById('txtPolygonSide');
    var apothem = document.getElementById('txtPolygonApothem');
    var result = document.getElementById('txtPolygonArea');
    if (isNaN(parseInt(sideCount.value)) || isNaN(parseInt(side.value)) || isNaN(parseInt(apothem.value))) {
        error('La cantidad de lados, el lado o el apotema del polígono no son números', result);
    }
    else if (parseInt(sideCount.value) <= 2 || parseInt(side.value) <= 0 || parseInt(apothem.value) <= 0) {
        error('La cantidad de lados, el lado o el apotema del polígono están en un rango inválido', result);
    }
    else {
        result.value = polygonArea(parseInt(sideCount.value), parseInt(side.value), parseInt(apothem.value));
    }
}
