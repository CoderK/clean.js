/**
 * 특정 콘텍스트에 바인딩한 함수를 만들어서 돌려줍니다.
 * @param {Function} funArg
 * @param {Object} context
 * @returns {Function} {bound}
 */
clean.function.bind = function (funArg, context){
    var	partial	= Array.prototype.splice.call(arguments, 2);

    // 바운드 함수를 만듭니다.
    var Bound = function(){
        // apply에 전달할 매개변수 배열이 필요합니다.
        var args = partial.concat( Array.prototype.splice.call(arguments, 0) );
        if ( false === ( funArg instanceof Bound ) ){
            return funArg.apply( context, args );
        }

        funArg.apply( funArg, args );
    }

    // 프로토타입
    Bound.prototype = funArg.prototype;
    return Bound;
};