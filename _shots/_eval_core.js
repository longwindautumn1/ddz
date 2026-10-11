// 核心路径验证：选择玩家2为地主，录本局得分30，地主赢，记入
function run(){
  // 点击第2个玩家卡片（index 1）设为地主
  var cards = document.querySelectorAll('.player');
  cards[1].click();
  // 输入得分
  var input = document.getElementById('scoreInput');
  input.value = '30';
  input.dispatchEvent(new Event('input',{bubbles:true}));
  // 记入
  document.getElementById('okBtn').click();
  // 输出结果
  var scs = Array.prototype.map.call(document.querySelectorAll('.player .sc'), function(el){return el.textContent;});
  var preview = document.getElementById('preview').textContent;
  return {
    landlordSelected: document.getElementById('landlordName').textContent,
    finalScores: scs,
    preview: preview
  };
}
run();
