import test from 'ava';
import buildShellScript from './';

test('alias', t => {
  t.is(buildShellScript.alias('a', 'b'), 'alias a="b"');
  t.is(buildShellScript.alias('a*', 'b'), `alias a'*'="b"`);
});

test('fn', t => {
  t.is(buildShellScript.fn('a', 'b'), 'a() {\n  b\n}');
  const suffix = [
    'git add -A',
    'git commit',
    'git push'
  ];
  const suffixOutput = `g() {
  git add -A
  git commit
  git push
}`;

  t.is(buildShellScript.fn('g', suffix), suffixOutput);
});
