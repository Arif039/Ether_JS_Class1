//Only keeping the smart contract for reference
//Name at Remix IDE: SimpleToken.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleToken {

    string public name;
    string public symbol;
    uint8 public decimal;
    uint256 public totalSupply;

    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowances;

    event Transfer (address indexed from, address indexed to, uint256 value);
    event Approval (address indexed owner, address indexed spender, uint256 value);

    constructor(string memory _name, string memory _symbol, uint8 _decimal, uint256 _initialSupply) {
        name = _name;
        symbol = _symbol;
        decimal = _decimal;
        totalSupply = _initialSupply * (10 ** decimal);
        balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function balanceOf (address _owner) public view returns (uint256) {

        return balances[_owner];
    }

    function transfer (address _to, uint256 _value) public returns (bool) {

        require(_to != address(0), "Invalid Recipent");
        require(balances[msg.sender] >= _value, "Insufficient Balance");

        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);     

        return true;
    }

    function approve (address _spender, uint256 _value) public returns (bool) {

        allowances[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
    
    function allowance (address _owner, address _spender) public view returns (uint256){

        return allowances[_owner][_spender];
    }

    function transferFrom (address _from, address _to, uint256 _value) public returns (bool) {

        require(_from != address(0), "Invalid Sender");
        require(_to != address(0), "Invalid Recipent");
        require(balances[_from] >= _value, "Insufficient balance");
        require(allowances[_from][msg.sender] >= _value, "Insufficient allowance");

        balances[_from] -= _value;
        allowances[_from][msg.sender] -= _value;
        balances[_to] += _value;

        emit Transfer(_from, _to, _value);
        return true;
    }

}